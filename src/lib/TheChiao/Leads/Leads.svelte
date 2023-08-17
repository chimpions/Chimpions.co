<script>
	import { leads } from '../../_content/leads.svelte';
    import Lead from "./Lead.svelte"

    const leadTeams = [
        {
            name: "Governance Team",
            description: "The Governance Team is responsible for ensuring that the project's governance structure is functioning smoothly. They will organise townhalls and lead meetings to discuss important topics. They will also track the project's financials and ensure that they are transparent and accessible to the community. In addition, the governance lead will oversee the development and distribution of any project-related merch.",
            leader: "Roninwar",
            teamMembers: [
                "Doudou",
                "Jota",
                "Minne_ape_olis"
            ],
        },
        {
            name: "Technology Team",
            description: "The Tech Team is responsible for the technological part of the project. They will work on the metadata update and website infrastructure. Any tools to be implemented need to be verified by the team.",
            leader: "Minne_ape_olis",
            teamMembers: [
                "Doudou",
                "Alkine",
                "Roninwar"
            ]
        },
        {
            name: "Opportunity Team",
            description: "The Opportunity Team is responsible for identifying and pursuing new business opportunities for the project. They are responsible for searching for new WL and Presale opportunities. Working closely with MonkeDAO building CHIAO VC.",
            leader: "MaxBrs",
            teamMembers: [
                "Jota",
                "Zionatlas"
            ]
        },
        {
            name: "Communication Team",
            description: "The Communication Team is responsible for developing and implementing a communications strategy for the project. They are in charge of disseminating information to holders, and ensuring that the team's message is consistent and aligned with the general goals. They are responsible for creating and maintaining the team's social media accounts.",
            leader: "Brink",
            teamMembers: [
                "Minne_ape_olis",
                "Sidvicious"
            ]
        },
        {
            name: "Curator Team",
            description: "The Curator Team is responsible for taking care of Treehouse and future TWS partnerships. They will help guide CHIAO in future auctions by contacting artists to collaborate. They will also be able to spend 10% of chimpions revenue curating new art to the CHIAO treasury.",
            leader: "Utopia",
            teamMembers: [
                "Brink",
                "Zionatlas"
            ]
        }
    ];
    
    const getLead = (name) => {
        for (let i = 0; i < leads.length; i++) {
            if (leads[i].name === name) {
                return (leads[i])
            }
        }
    }
</script>

<section>
	<h2 class="subsectionHeading">The Leads</h2>
    <p class="subsectionParagraph" style="margin-bottom: 0px">10 Chimpions Leads are elected by the CHIAO for a 3 months period.</p>
    <p class="subsectionParagraph">For more efficiency and more accountability, the leads are organised in 5 teams:</p>
    {#each leadTeams as leadTeam}
        <div class="teamContainer">
            <div class="teamName">
                {leadTeam.name}
            </div>
            <div class="teamDescription subsectionParagraph">
                {leadTeam.description}
            </div>
            <div class="team">
                <div class="teamLeader">
                    <div class="title">
                        Team Leader
                    </div>
                    <div class="leads">
                        <Lead
                            lead={getLead(leadTeam.leader)}
                        />
                    </div>
                </div>
                <div class="teamMembers">
                    <div class="title">
                        Team Members
                    </div>
                    <div class="leads">
                        {#each leadTeam.teamMembers as teamMember}
                            <Lead
                                lead={getLead(teamMember)}
                            />
                        {/each}
                    </div>
                </div>
            </div>
        </div>
    {/each}
</section>



<style>
    .teamContainer {
        margin: 4rem 0rem 4rem 1rem;
        text-align: justify;
    }

    .teamName {
        font-size: 1.75rem;
        margin-bottom: 1rem;
        color: white;
    }

    .teamDescription {
        margin-bottom: 2rem;
    }

    .team {
        display: flex;
    }

    .teamLeader {
        border: 2px white solid;
        border-right: 1px white solid;
        border-top-left-radius: 0.25rem;
        border-bottom-left-radius: 0.25rem;
        text-align: center;
    }

    .teamMembers {
        border-top-right-radius: 0.25rem;
        border-bottom-right-radius: 0.25rem;
        border: 2px white solid;
        border-left: 0px;
        text-align: center;
    }

    .title {
        border-bottom: 1px white solid;
        border-top-left-radius: 0.25rem;
        border-top-right-radius: 0.25rem;
        padding: 0.5rem;
        background-color: var(--dark-purple);
    }

    .leads {
        display: grid;
        grid-auto-flow: column;
        grid-auto-columns: minmax(0, 1fr);
        background-color: var(--purple);
        border-bottom-left-radius: 0.25rem;
        border-bottom-right-radius: 0.25rem;
    }

    @media (max-width: 768px) {
        .team {
            display: flex;
            flex-direction: column;
        }

        .teamLeader {
            max-width: 300px;
            margin: 0rem auto 1rem auto;
            border: 2px white solid;
            border-radius: 0.25rem;
            text-align: center;
        }

        .teamMembers {
            border-radius: 0.25rem;
            border: 2px white solid;
            text-align: center;
        }

        .title {
            border-bottom: 1px white solid;
            border-top-left-radius: 0.5rem;
            border-top-right-radius: 0.5rem;
            padding: 0.5rem;
            background-color: var(--dark-purple);
        }

        .leads {
            display: grid;
            grid-auto-flow: column;
            grid-auto-columns: minmax(0, 1fr);
            background-color: var(--purple);
        }
    }
</style>