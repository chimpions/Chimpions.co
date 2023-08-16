<script>
    // @ts-ignore
    import Fa from 'svelte-fa/src/fa.svelte';
    import { faCircle } from '@fortawesome/free-solid-svg-icons/index.js';
    
	const cornerstones = [
		{
			title: 'Builders',
			content: [
				'Those who create innovative products and solutions that generate value for ecosystem participants.',
				'Individuals who get their hands dirty, and take the initiative to jump in and solve problems themselves.',
			],
		},
		{
			title: 'Curators',
			content: [
				"Curators produce value through the collaboration and coordination of the space's top talent. ",
				'Individuals who love to highlight & uplift artists.',
			],
		},
		{
			title: 'Collaborators',
			content: [
				'Collaborators support The Chimpions and the wider community, giving time and energy to execute on this vision to create a better Solana, Ethereum, and Web3 ecosystem.',
				"Individuals who see opportunities and sieve them, fostering relationships & partnerships with leading artists, builders, and projects. They're willing to jump in and help however they can.",
			],
		},
		{
			title: 'Artists',
			content: [
				'Those who creatively express themselves through the creation of art.',
				'Those who consume and enjoy the art that the space has to offer.',
			],
		},
		{
			title: 'Investors',
			content: [
				'Those who share and teach their experience, insights, and knowledge of markets.',
				'Those who invest in high-effort, high-quality projects to incentivise and promote a healthier NFT ecosystem.',
			],
		},
	];

	const coreValues = [
		'Supporting the creator economy and helping artists get the recognition they deserve.',
		'Fostering a community that leads with honesty, integrity, and open-mindedness.',
		'Innovating across technology, governance, communication, and community building.',
		'Encouraging and celebrating member participation.',
		'Keeping Spirit - Staying positive through trying times.',
	];

	const coreActivities = [
		'Promoting artistic integrity, and 1/1 Art.',
		'Challenging the ecosystem to build innovative and unique projects that elevate its quality.',
		'Maintaining a professional public presence, championing constructive discussions.',
		'Rejecting advocates of destructive short-term incentive models.',
		'Building the ecosystem with a focus on sustainability, longevity, and organic growth.',
		'Dissolving unjust opportunity-limiting barriers.',
		'Advocating for the bridging and collaboration of like-minded communities.',
		'Promoting the value of being creative, unique and taking risks.',
		'Advising, advocating for, and building projects that align with our Core Values.',
	];
</script>



<section class="sectionContainer">
	<h2 class="subsectionHeading">Our Vision</h2>
	<p class="subsectionParagraph">
		The Chimpions are a Web3 community focused on empowering artists, and
		elevating the NFT space. The community aims to support the development
		and advancement of the decentralised web by bringing together skilled
		individuals from across prominent Solana and Ethereum communities.
	</p>
	<h2 class="subsectionHeading">Goals</h2>
	<div class="subsectionParagraph">
		The goal of the Chimpions is to champion artists & their initiatives
		across the NFT space. By bringing together active members from a wide
		range of leading communities across blockchains, we hope to create value
		not easily achieved in siloes. Sharing best practices, ideas,
		initiatives, and a love for Web3 will help guide us into the future by
		creating strategic partnerships where previously not possible.
		<br/>
		<br/>
		We strive to create a community where our members are eager to help &
		contribute for the betterment of the NFT space as a whole. The Chimpions
		empower the cornerstones of the space:
		<br/>
		<br/>
		{#each cornerstones as role}
            <div class="roleTitle">
                {role.title}
            </div>
            <ul class="roleContent">
                {#each role.content as contentElem}
                    <li class="list">
                        <div>
                            <Fa icon={faCircle} scale={0.5} />
                        </div>
                        {contentElem}
                    </li>
                {/each}
            </ul>
		{/each}
	</div>

	<h2 class="subsectionHeading">Core Values</h2>
	<div class="subsectionParagraph">
        <ul class="roleContent">
            {#each coreValues as value}
                <li class="list">
                    <div>
                        <Fa icon={faCircle} scale={0.5} />
                    </div>
                    {value}
                </li>
            {/each}
        </ul>
	</div>

	<h2 class="subsectionHeading">Core Activities</h2>
	<div class="subsectionParagraph">
		The Chimpions vision will be achieved by promoting an ecosystem culture
		that focuses on our core values. The Chimpions shall spearhead the
		following activities:
		<br/>
		<ul class="roleContent">
			{#each coreActivities as activity}
                <li class="list">
                    <div>
                        <Fa icon={faCircle} scale={0.5} />
                    </div>
                    {activity}
                </li>
			{/each}
		</ul>
	</div>
</section>

<style>
    .sectionContainer {
        width: 100%;
        margin-bottom: 6rem;
    }
    
    .roleTitle {
        margin-top: 1.5rem;
        margin-left: 2rem;
    }

    .roleContent {
        margin-left: 2.5rem;
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }

    .list {
        display: flex;
        gap: 0.875rem;
    }

@media screen and (max-width: 500px) {
	.roleContent {
        margin-left: 0rem;
    }
}
</style>