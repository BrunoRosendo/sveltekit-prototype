<script>
// @ts-nocheck

    export let project;
</script>

<div class="card-display">
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
        border: solid 1px;
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
        width: 100%;
        background: linear-gradient(rgba(255, 67, 67, 0.4), rgba(117, 23, 30, 0.4));
        border-color: #FB3232;
    }
    .card-wrapper {
        padding: 3rem;
    }
    .project-image {
        filter: drop-shadow(0px 5px 11px rgba(60, 0, 0, 0.58));
        margin-bottom: 5rem;
    }
</style>