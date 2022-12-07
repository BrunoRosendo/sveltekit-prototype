<script>
    export let project;

    const archiveProject = async () => {
        await fetch(`https://parseapi.back4app.com/functions/archiveProject?id=${project.objectId}`, {
            method: "POST",
            headers: {
                "X-Parse-Application-Id": "yB953MbsVE0hvNYJLy9Udleb7uF0bwB4AWDoAuD9",
                "X-Parse-REST-API-Key": "3TA8ugnSSIN1TB8tQNDGTudYk00i9dghfwloy84c"
            }
        });
    }
</script>

<div class="card-display" on:click={archiveProject}>
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