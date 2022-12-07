<script>
    import {archiveProject, loadProjects} from "$lib/requests.js";
    import {projects} from "$lib/stores.js";

    export let project;

    const archiveAndReload = async () => {
        await archiveProject(project.objectId);
        projects.set(await loadProjects());
    }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="card-display" on:click={archiveAndReload}>
    <div class="card-wrapper">
        <div>
            <img src={project.imageURL} alt={project.name + " logo"} class="project-image" />
        </div>
        <div class="mdc-typography--headline3" style="margin-bottom: 4.5rem">{project.description}</div>
        <div class="mdc-typography--headline5">{project.type}</div>
    </div>
</div>

<style>
    .card-display {
        border-radius: 0.5rem;
        border: solid 1px;
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
        width: 100%;
        background: linear-gradient(rgba(255, 67, 67, 0.4), rgba(117, 23, 30, 0.4));
        border-color: #FB3232;
        backdrop-filter: blur(6px);
    }
    .card-wrapper {
        padding: 3rem;
    }
    .project-image {
        filter: drop-shadow(0px 5px 11px rgba(60, 0, 0, 0.58));
        margin-bottom: 5rem;
        min-height: 10rem;
        max-height: 15rem;
        max-width: 17rem;
    }
</style>