<script>
	import ArchivedProjectCard from "$lib/ProjectCards/ArchivedProjectCard.svelte";
    import ProjectCards from "$lib/ProjectCards/index.svelte";
    import LayoutGrid, { Cell } from '@smui/layout-grid';

    export let data;

    const activeProjects = data.projects.filter(project => !project.isArchived);
    const groupedProjects = [];
    for (let i = 0; i < activeProjects.length; i += 3)
        groupedProjects.push(activeProjects.slice(i, i + 3));

    const archivedProjects = data.projects.filter(project => project.isArchived);

</script>

<div class = "main-page">
    <div class="mdc-typography--headline3" style="margin: 2vw; font-size: 2.5rem">{"< Projetos />"}</div>

    {#each groupedProjects as group}
        <ProjectCards project1={group[0]} project2={group[1]} project3={group[2]} />
    {/each}

    <div class="mdc-typography--headline3" style="margin: 2vw; margin-top: 4vw;font-size: 2.5rem">{"< Projetos Arquivados />"}</div>

    <LayoutGrid fixedColumnWidth>
        {#each archivedProjects as project}
        <Cell span={4}>
            <ArchivedProjectCard {project} />
        </Cell>
	    {/each}
    </LayoutGrid>   
</div>

<style>
    .main-page {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
    }
</style>
