<script>
// @ts-nocheck

	import LayoutGrid, { Cell } from '@smui/layout-grid';
    import SmallProjectCard from './SmallProjectCard.svelte';
    import BigProjectCard from './BigProjectCard.svelte';

    export let project1, project2, project3;
</script>

<LayoutGrid fixedColumnWidth>
    <Cell span={8}>
        <div class="small-projects">
            <SmallProjectCard project={project1} useLight={false} />
            <SmallProjectCard project={project3} useLight={true} />
        </div>
    </Cell>
    <Cell span={4}>
        <BigProjectCard project={project2} />
    </Cell>
</LayoutGrid>

<style>
    .small-projects {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content:space-between
    }
</style>
