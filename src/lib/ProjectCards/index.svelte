<script>
// @ts-nocheck

	import LayoutGrid, { Cell } from '@smui/layout-grid';
	import List, { Item } from '@smui/list';
    import Card, { Content } from '@smui/card';

    export let project1, project2, project3;
</script>

<LayoutGrid fixedColumnWidth>
    <Cell span={8}>
        <div class="small-projects">
            <div class="card-display card-dark">
                <div class="small-card-container">
                    <img src={project1.imageURL} alt={project1.name + " logo"} class="project-image project-image-small" />
                    <div class="small-card-text">
                        <div class="mdc-typography--headline4">{project1.description}</div>
                        <div class="mdc-typography--headline5">{project1.type}</div>
                    </div>
                </div>
            </div>
            <div class="card-display card-light">
                <div class="small-card-container">
                    <img src={project3.imageURL} alt={project3.name + " logo"} class="project-image project-image-small" />
                    <div class="small-card-text">
                        <div class="mdc-typography--headline4">{project3.description}</div>
                        <div class="mdc-typography--headline5">{project3.type}</div>
                    </div>
                </div>
            </div>
        </div>
    </Cell>
    <Cell span={4}>
        <div class="card-display card-middle">
            <div class="card-wrapper">
                <div>
                    <img src={project2.imageURL} alt={project2.name + " logo"} class="project-image project-image-big" />
                </div>
                <div class="mdc-typography--headline3" style="margin-bottom: 4.5rem">{project2.description}</div>
                <div class="mdc-typography--headline5">{project2.type}</div>
            </div>
        </div>
    </Cell>
</LayoutGrid>

<style>
    .card-display {
        border: solid 1px;
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
        width: 100%;
    }
    .card-dark {
        background: linear-gradient(#1F0000, #9B1515);
        border-color: #BF0808;
    }
    .card-middle {
        background: linear-gradient(#DA7F62, #75171E);
        border-color: #FB3232;
    }
    .card-light {
        background: linear-gradient(#7E2C12, #FF4A31);
        border-color: #FF5B27;
    }
    .card-wrapper {
        padding: 3rem;
    }
    .project-image {
        filter: drop-shadow(0px 5px 11px rgba(60, 0, 0, 0.58));
    }
    .small-card-container {
        display: flex;
        justify-content: space-evenly;
        padding: 3rem 0 3rem 0;
    }
    .project-image-big {
        margin-bottom: 5rem;
    }
    .project-image-small {
        height: 12rem;
    }
    .small-card-text {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
    }
    .small-projects {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content:space-between
    }
</style>
