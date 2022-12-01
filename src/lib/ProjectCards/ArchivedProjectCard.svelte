<script>
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
        border: 1px solid rgba(188, 12, 12, 0);
        aspect-ratio: 1;
        width: 80%;
        border-radius: 2.5rem;
        margin: 0 10% 10% 10%;
        backdrop-filter: blur(6px)
    }

    .card-display:hover{
        border: 1px solid rgba(188, 12, 12, 1);
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