<script>
	import LayoutGrid, { Cell } from '@smui/layout-grid';
</script>

<div class = "main-page">
    <div class="mdc-typography--headline3">{"< Projetos />"}</div>

    <LayoutGrid>
        <Cell span={8} style = "border : 1px solid; height: 100%">
            <div class="mdc-typography--headline5">{"< Projeto 1 />"}</div>
            <div class="mdc-typography--body1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
        </Cell>
        <Cell span={4} style="height: 200%; border : 1px solid">
            <div class="mdc-typography--headline5">{"< Projeto 1 />"}</div>
            <div class="mdc-typography--body1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
        </Cell>
        <Cell span={8} style = "border : 1px solid; height: 100%">
            <div class="mdc-typography--headline5">{"< Projeto 1 />"}</div>
            <div class="mdc-typography--body1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
        </Cell>
    </LayoutGrid>   
</div>


<style>
    .main-page {
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
    }
    
</style>