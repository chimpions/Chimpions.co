<script>
    // @ts-ignore
    import Fa from 'svelte-fa/src/fa.svelte';
    import { faDiscord, faTwitter } from '@fortawesome/free-brands-svg-icons/index.js';
    import { council } from "../../_content/council.svelte";
    import chimpions from '../../_content/chimpions.json';
</script>

<section class="sectionContainer">
    <h2 class="subsectionHeading">FAQ</h2>
        <div class="qa">
            <p class="subsectionQuestion">
                When was the launch?
            </p>
            <p class="subsectionAnswer">
                The Chimpions minted on January 31st, 2022 for 0.22 SOL.<br/>The project utilized a 100% whitelist, 1-per-wallet approach.<br/>Whitelists were offered via Discord/Twitter giveaways as well as through art and lore submissions.
            </p>
        </div>
        <div class="qa">
            <p class="subsectionQuestion">
                Where can I buy a Chimpion?
            </p>
            <p class="subsectionAnswer">
                You can buy a Chimpion on <a href="https://www.tensor.trade/trade/the_chimpions">Tensor</a>.
            </p>
        </div>
        <div class="qa">
            <p class="subsectionQuestion">
                Why should I buy a Chimpion?
            </p>
            <p class="subsectionAnswer">
                There are so many reasons to buy a Chimpion. We think some of the most compelling are detailed in these two threads by our leads (TLDR: art + alpha + community):<br/>
                <li><a href="https://twitter.com/ThesisInvestor/status/1523642327419432961" target="_blank">ThesisInvestor's Tweet</a>.</li>
                <li><a href="https://twitter.com/max___brs/status/1508154075405193217" target="_blank">MaxBrs' Tweet</a>.</li>
            </p>
        </div>
        <div class="qa">
            <p class="subsectionQuestion">
                Who leads the Chimpions?
            </p>
            <p class="subsectionAnswer">
                The Chimpions have adapted to the ecosystem in which they live. Whereas a model where 10 Leads representing the Chimpions served them for just over a year, the Chimpions have decided to pivot to a governance model with a CEO.
                <br/><br/>
                The new model operates as follows:
                The chimpions elect a CEO from among the members of the previous board for a 6-month term.
                A new board is created from 10 volunteers chosen in order of the most active members of the community.
            </p>
        </div>
        <div class="qa">
            <p class="subsectionQuestion">
                Is there an official Twitter account?
            </p>
            <p class="subsectionAnswer">
                Here is our account: <a href="https://twitter.com/TheChimpions/">https://twitter.com/TheChimpions/</a>.<br/>You can follow us to keep up to date with our latest news.
            </p>
        </div>
        <div class="qa">
            <p class="subsectionQuestion">
                Is there an official ranking?
            </p>
            <p class="subsectionAnswer">
                No. Each Chimpion is a 1/1 NFT, so rarity is purely in the eyes of the beholder.
            </p>
        </div>
        <div class="qa">
            <p class="subsectionQuestion">
                What else should I know?
            </p>
            <p class="subsectionAnswer">
                The Chimpions are a tight knit community. If you have a question, don’t hesitate to ask on <a href="https://twitter.com/TheChimpions/">Twitter</a> or on <a href="https://discord.gg/thechimpions">Discord</a>.
            </p>
        </div>
    <h2 class="subsectionHeading">
        The CEO
    </h2>
    <div class="subsectionParagraph">
        <p>
            For this first term running from July 17, 2023 to January 17, 2024, Doudou has been elected CEO.
        </p>
        <p>
            Missions:
        </p>
        <ul>
            <li>Make the Chimpions prosper</li>
            <li>Satisfy CHIAO's requests</li>
            <li>Manage the Treasury</li>
        </ul>
    </div>
    <div class="CEO">
        <div class="lead-box">
            <img
                class='chimpImage'
                src={chimpions[1].paths.gif}
                alt='Chimpion of Doudou'
            />
            <div class="leadDescription">
                <div class='leadName'>
                    Doudou
                </div>
                <div class='leadTwitterAndDiscord'>
                    <Fa icon={faTwitter} size="sm" />
                    <a href="https://twitter.com/notdoudou_sol" target="_blank" rel="noreferrer" style="color: inherit; text-decoration:none; 
                    cursor:pointer;">@notdoudou_sol</a>
                </div>
                <div class='leadTwitterAndDiscord'>
                    <Fa icon={faDiscord} size="sm" />
                    notdoudou_sol
                </div>
            </div>
        </div>
    </div>

        
    <h2 class="subsectionHeading">
        The Council
    </h2>
    <div class="subsectionParagraph">
        <p>
            The Council is the intermediary between the CEO and the CHIAO.
        </p>
        Missions:
        <ul>
            <li>Secure the CHIAO treasury by validating the transactions</li>
            <li>Support the CEO in decision-making</li>
            <li>Vote to dismiss the CEO in case of profound disagreement with the actions taken</li>
        </ul>
        <p>
            The current Council members are :
        </p>
    </div>
    <div class="council">
        {#each council as councilMember}
            <div class="lead-box">
                <img
                    class='chimpImage'
                    src={councilMember.chimp.paths.gif}
                    alt='Chimpion of {councilMember.name}'
                />
                <div class="leadDescription">
                    <div class='leadName'>
                        {councilMember.name}
                    </div>
                    <div class='leadTwitterAndDiscord'>
                        <Fa icon={faTwitter} size="sm" />
                        <a href="https://twitter.com/{councilMember.twitter}" target="_blank" rel="noreferrer" style="color: inherit; text-decoration:none; 
                        cursor:pointer;">{councilMember.twitter}</a>
                    </div>
                    <div class='leadTwitterAndDiscord'>
                        <Fa icon={faDiscord} size="sm" />
                        {councilMember.discord}
                    </div>
                </div>
            </div>
        {/each}
    </div>
    <h2 class="subsectionHeading">
        Code of Conduct
    </h2>
    <div class="subsectionParagraph">
        <p>The Code of Conduct describes the desired behaviour and actions for all members of the CHIAO, and is tacitly accepted by joining The Chimpions community.</p>
        <p>In The Chimpions we promote a respectful, family atmosphere. We seek to empower community members to be the best they can be. Members should be aware of the code of conduct and attempt to always act within the bounds herein for the continued good of the community as a whole.</p>
        <ol>
            <li>Strive to be excellent to all people and help whenever possible</li>
            <li>Treat each other with kindness and respect, and foster an inclusive environment for all</li>
            <li>Remember that your actions reflect on the entire Chimpions community, especially if you use a Chimpion as your profile picture on social media</li>
            <li>Do not spam the discord channels with irrelevant messages or content</li>
            <li>Do not attempt to scam or deceive other members of the community or anyone outside of the community</li>
            <li>Do not engage in any discriminatory or hateful behaviour, including but not limited to racism, sexism, homophobia</li>
            <li>Avoid engaging in any behaviour that could be perceived as harassment, intimidation, or bullying towards other members</li>
            <li>Community Members can not loan their Chimpions to anyone for temporary access to the CHIAO benefits such as Whitelists or VC Deals</li>
            <li>Do not share or distribute any personal or confidential information of other members without their explicit consent</li>
            <li>Do not engage in any unethical or fraudulent NFT or cryptocurrency trading practices, such as, but not limited to, buying NFTs with stolen or fake funds, or selling NFTs that you do not own or have the right to sell</li>
            <li>Do not engage in any activities that would harm the integrity or value of the Chimpions NFT collection or community, such as manipulating the market (for example, Pump and Dump) or participating in vote-rigging</li>
            <li>If you have any issues or concerns regarding the conduct of another CHIAO member, please contact an elected lead rather than addressing them in the discord server, or publicly</li>
            <li>Violation of any of these rules may result in temporary or permanent revocation of access to the Discord community, any punishment will be discussed and voted upon among the CHIAO</li>
        </ol>
    </div>
</section>



<style>
    .sectionContainer {
        width: 100%;
        margin-bottom: 6rem;
    }

    ul {
        margin: 0 0 3rem 0;
        line-height: 1.25rem;
        letter-spacing: 0.05rem;
        font-size: 0.875rem;
        color: var(--whiter-purple);
    }

    ol li {
        margin: 1rem;
    }
    
    .CEO {
        margin: auto;
        display: grid;
        grid-template-columns: 250px;
        width: fit-content;
        justify-items: center;
    }
    
    .council {
        --numberOfColumns: 1;
        --column-gap: calc(80vw - var(--numberOfColumns) * 250px);
        margin: auto;
        display: grid;
        grid-template-columns: repeat(var(--numberOfColumns), 250px);
        width: fit-content;
        row-gap: calc(var(--column-gap) /3);
        column-gap: var(--column-gap);
        justify-items: center;
    }

    @media screen and (min-width: 700px) {
        .council {
            --numberOfColumns: 2;
            --column-gap: calc((80vw - var(--numberOfColumns) * 250px) / var(--numberOfColumns));
            row-gap: calc(var(--column-gap) * 350 / 250);
        }
    }

    @media screen and (min-width: 900px) {
        .council {
            --numberOfColumns: 3;
        }
    }

    @media screen and (min-width: 1100px) {
        .council {
            --numberOfColumns: 4;
        }
    }

    @media screen and (min-width: 1400px) {
        .council {
            --numberOfColumns: 5;
        }
    }

    .lead-box {
        margin: 1rem;
    }

    .chimpImage {
        max-width: 200px;
        border-radius: 0.25rem;
        width: 100%;
    }

    .leadDescription {
        max-width: 200px;
        border-radius: 0.25rem;
        margin-top: 0.25rem;
        padding: 0.25rem;
        color: white;
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
        user-select: none;
        opacity: 0.8;
        transition: opacity 0.3s ease;
    }

    .leadTwitterAndDiscord:hover {
        opacity: 1;
        transition: opacity 0.3s ease;
    }

    @media (max-width: 768px) {
        .leadName {
            font-size: 0.875rem;
        }

        .leadTwitterAndDiscord {
            font-size: 0.625rem;
        }
    }

    a {
        color: inherit;
    }



    .subsectionParagraph {
        text-align: justify;
        line-height: 1.5rem;
        letter-spacing: 0.05rem;
        width: 100%;
        opacity: 0.8;
        margin-top: 0.5rem;
        color: var(--purple-white);
    }

    .subsectionQuestion {
        font-size: 1.125rem;
        width: 100%;
        margin-top: 0rem;
        letter-spacing: 0.05em;
        color: var(--whiter-purple);
    }

    .subsectionAnswer {
        width: 100%;
        margin-top: 1rem;
        margin-bottom: 0rem;
        line-height: 1.5rem;
        letter-spacing: 0.05rem;
        color: var(--purple-white);
        padding-left: 1rem;
        border-left: 2px currentColor solid;
    }

    .qa {
        border-radius: 0.25rem;
        background-color: rgb(31 6 56 / 1);
        padding: 1rem;
        margin-top: 1rem;
        margin-bottom: 3rem;
    }
</style>