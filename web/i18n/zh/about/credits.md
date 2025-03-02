<script lang="ts">
    import { contacts, docs } from "$lib/env";
    import { t } from "$lib/i18n/translations";

    import SectionHeading from "$components/misc/SectionHeading.svelte";
    import BetaTesters from "$components/misc/BetaTesters.svelte";
</script>

<section id="imput">
<SectionHeading
    title="imput"
    sectionId="imput"
/>

cobalt is made with love and care by the [imput](https://imput.net/) research and development team.

you can support us on the [donate page](/donate)!

</section>

<section id="testers">
<SectionHeading
    title={$t("about.heading.testers")}
    sectionId="testers"
/>

huge shoutout to our thing breakers for testing updates early and making sure they're stable.
they also helped us ship cobalt 10! <BetaTesters />

all links are external and lead to their personal websites or social media.

</section>

<section id="meowbalt">
<SectionHeading
    title={$t("general.meowbalt")}
    sectionId="meowbalt"
/>

meowbalt is cobalt's speedy mascot. he is an extremely expressive cat that loves fast internet.

all amazing drawings of meowbalt that you see in cobalt were made by [GlitchyPSI](https://glitchypsi.xyz/).
他也是该角色的原始设计师。



you cannot use or modify the meowbalt character design commercially or in any form that isn't fan art.

</section>

<section id="licenses">
<SectionHeading
    title={$t("about.heading.licenses")}
    sectionId="licenses"
/>

cobalt processing server is open source and licensed under [AGPL-3.0]({docs.apiLicense}).

cobalt frontend is [source first](https://sourcefirst.com/) and licensed under [CC-BY-NC-SA 4.0]({docs.webLicense}).
我们决定使用此许可证来阻止骗子从我们的工作中获利，并防止他们创建欺骗公众并损害我们公众形象的恶意克隆。

we rely on many open source libraries, create & distribute our own.
you can see the full list of dependencies on [github]({contacts.github}).

</section>
