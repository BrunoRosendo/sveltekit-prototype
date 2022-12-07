<script>
    export let project;
    export let useLight;

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

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class={"card-display " + (useLight ? "card-light" : "card-dark")} on:click={archiveProject}>
    <div class="small-card-container">
        <img src={project.imageURL} alt={project.name + " logo"} class="project-image" />
        <div class="small-card-text">
            <div class="mdc-typography--headline4">{project.description}</div>
            <div class="mdc-typography--headline5">{project.type}</div>
        </div>
    </div>
</div>


<style>
    .card-display {
        border-radius: 0.5rem;
        border: solid 1px;
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
        width: 100%;
        backdrop-filter: blur(6px);
        height: 18rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .card-dark {
        background: linear-gradient(rgba(31, 0, 0, 0.5), rgba(155, 21, 21, 0.5));
        border-color: #BF0808;
    }
    .card-light {
        background: linear-gradient(rgba(126, 44, 18, 0.5), rgba(255, 74, 49, 0.5));
        border-color: #FF5B27;
    }
    .small-card-container {
        display: flex;
        justify-content: space-evenly;
        padding: 3rem 0 3rem 0;
        width: 100%;
        height: 100%;
    }
    .project-image {
        max-height: 12rem;
        max-width: 20rem;
        filter: drop-shadow(0px 5px 11px rgba(60, 0, 0, 0.58));
    }
    .small-card-text {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
    }
</style>
