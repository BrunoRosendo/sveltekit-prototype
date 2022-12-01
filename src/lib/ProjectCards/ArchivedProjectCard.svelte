<script>
// @ts-nocheck
    export let project;
</script>

<div class="card-display">
    <div class="small-card-text">
        <div class="mdc-typography--headline4">{project.name}</div>
        <div class="mdc-typography--headline5">{project.type}</div>
    </div>
</div>


<style>
    .card-display {
        background-color: rgba(255, 255, 255, 0.25);
        aspect-ratio: 1;
        width: 80%;
        border-radius: 2.5rem;
        margin: 0 10% 0 10%;
    }

    .card-display:hover{
        background: linear-gradient(rgba(179, 54, 54, 0.25),rgba(113, 3, 3, 0.25));
        transition: .2s;
    }
    
    .small-card-text{
        height: 50%;
        padding: 25% 0 25% 0;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
    }
</style>