import { genericUserAgent } from "../../config.js";

const shortDomain = "http://xhslink.com/A/";

export default async function (obj) {
  const url = await fetch(`${shortDomain}${obj.id}`, {
    follow: 1,
    redirect: "follow",
    headers: {
      "user-agent": genericUserAgent,
    },
  }).then((res) => res.url);

  const res = await fetch(url, {
    headers: {
      "user-agent": genericUserAgent,
    },
  });

  const html = await res.text();

  let detail;
  try {
    const json = html
      .split("window.__INITIAL_STATE__ = ")[1]
      .split("</script>")[0];
    // TODO: 提取视频
    const data = JSON.parse(json);
    detail =
      data["LAUNCHER_SSR_STORE_PAGE_DATA"]["noteData"];
  } catch {
    return { error: "ErrorCouldntFetch" };
  }

  if (detail.type === 'video') {
    const streams = [...detail.video.media.stream.h264, ...detail.video.media.stream.h265, ...detail.video.media.stream.av1]
    return {
      urls: streams.map(s => s.masterUrl),
      filename: detail.title,
    }
  }
  if (detail.type === 'image') {
    return {
      urls: detail.imageList.map(s => s.url),
      filename: detail.title,
    }
  }
  return {}

}
