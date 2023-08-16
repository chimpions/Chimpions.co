<script>
    import Fa from 'svelte-fa/src/fa.svelte';
    import { faDiscord, faTwitter } from '@fortawesome/free-brands-svg-icons/index.js';

    export let lead = {};
    
</script>



<div class="lead-box">
    <img
        class='chimpImage'
        src={lead.chimp.paths.gif}
        alt='Chimpion of {lead.name}'
    />
    <div class="leadDescription">
        <div class='leadName'>
            {lead.name}
        </div>
        <div class='leadTwitterAndDiscord'>
            <Fa icon={faTwitter} size="sm" />
            <a href="https://twitter.com/{lead.twitter}" target="_blank" rel="noreferrer" style="color: inherit; text-decoration:none; 
            cursor:pointer;">{lead.twitter}</a>
        </div>
        <div class='leadTwitterAndDiscord'>
            <Fa icon={faDiscord} size="sm" />
            {lead.discord}
        </div>
    </div>
</div>



<style>
    .lead-box {
        margin: 1rem;
    }

    .chimpImage {
        max-width: 200px;
        border-radius: 0.25rem;
        width: 100%;
        border: 2px white solid;
    }

    .leadDescription {
        max-width: 200px;
        margin: auto;
        border-radius: 0.25rem;
        margin-top: 0.25rem;
        padding: 0.25rem;
        color: white;
        background-color: var(--light-purple);
    }

    .leadName {
        text-align: center;
        margin-bottom: 0.25rem;
    }

    .leadTwitterAndDiscord {
        display: flex;
        justify-content: center;
        align-items: center;
        column-gap: 0.25rem;
        font-size: 0.75rem;
        line-height: 1rem;
        text-align: center;
    }

    @media (max-width: 768px) {
        .leadName {
            font-size: 0.875rem;
        }

        .leadTwitterAndDiscord {
            font-size: 0.625rem;
        }
    }
</style>