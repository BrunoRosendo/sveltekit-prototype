<script>
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

    <LayoutGrid fixedColumnWidth style="border: 1px solid">
        <Cell span={4} align = "top" style = "border: 1px solid;">
            <div class="mdc-typography--headline5">{"< Projeto 1 />"}</div>
            <div class="mdc-typography--body1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
        </Cell>
        <Cell span={4} style= "border: 1px solid;">
            <div class="mdc-typography--headline5">{"< Projeto 2 />"}</div>
            <div class="mdc-typography--body1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
        </Cell>
        <Cell span={4} align = "middle" style = "border: 1px solid;">
            <div class="mdc-typography--headline5">{"< Projeto 3 />"}</div>
            <div class="mdc-typography--body1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
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