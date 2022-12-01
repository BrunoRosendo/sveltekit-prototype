<script>
	import ArchivedProjectCard from "$lib/ProjectCards/ArchivedProjectCard.svelte";
import ProjectCards from "$lib/ProjectCards/index.svelte";
    import LayoutGrid, { Cell } from '@smui/layout-grid';

    const project1 = {
        name: "Project 1",
        description: "A FEUP no teu bolso",
        type: "Aplicação Mobile",
        imageURL: "https://play-lh.googleusercontent.com/947VgiC4ySPiJtqMxhTDP7XuZs4UTWDtVYBsergfzM4XTbLA7mS4Xrh2lksZ28bm4nrQ=w240-h480",
    };
    const project2 = {
        name: "Project 2",
        description: "A FEUP no teu bolso",
        type: "Aplicação Mobile",
        imageURL: "https://play-lh.googleusercontent.com/947VgiC4ySPiJtqMxhTDP7XuZs4UTWDtVYBsergfzM4XTbLA7mS4Xrh2lksZ28bm4nrQ=w240-h480",
    };
    const project3 = {
        name: "Project 3",
        description: "A FEUP no teu bolso",
        type: "Aplicação Mobile",
        imageURL: "https://play-lh.googleusercontent.com/947VgiC4ySPiJtqMxhTDP7XuZs4UTWDtVYBsergfzM4XTbLA7mS4Xrh2lksZ28bm4nrQ=w240-h480",
    };
</script>

<div class = "main-page">
    <div class="mdc-typography--headline3" style="margin: 2vw; font-size: 2.5rem">{"< Projetos />"}</div>

    <ProjectCards {project1} {project2} {project3} />

    <div class="mdc-typography--headline3" style="margin: 2vw; margin-top: 4vw;font-size: 2.5rem">{"< Projetos Arquivados />"}</div>

    <LayoutGrid fixedColumnWidth>
        <Cell span={4}>
            <ArchivedProjectCard project = {project1} />
        </Cell>
        <Cell span={4}>
            <ArchivedProjectCard project = {project2} />        
        </Cell>
        <Cell span={4}>
            <ArchivedProjectCard project = {project3} />        
        </Cell>
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