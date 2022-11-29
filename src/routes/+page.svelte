<script>
	import LayoutGrid, { Cell } from '@smui/layout-grid';
</script>

<div class = "main-page">
    <div class="mdc-typography--headline3" style="margin: 2vw; font-size: 2.5rem">{"< Projetos />"}</div>

    <LayoutGrid fixedColumnWidth style="border: 1px solid;">
        <Cell span={8} align = "top" style = "border: 1px solid;">
            <div class="mdc-typography--headline5">{"< Projeto 1 />"}</div>
            <div class="mdc-typography--body1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
        </Cell>
        <Cell span={4} style="height: 165%; border: 1px solid;">
            <div class="mdc-typography--headline5">{"< Projeto 2 />"}</div>
            <div class="mdc-typography--body1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
        </Cell>
        <Cell span={8} align = "middle" style = "border: 1px solid;">
            <div class="mdc-typography--headline5">{"< Projeto 3 />"}</div>
            <div class="mdc-typography--body1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
        </Cell>
    </LayoutGrid>   

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


<div class="footer">
    <div class="mdc-typography--body1">{"< Footer />"}</div>
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

    .footer {
        width: 100%;
        display: flex;
        bottom: 0;
        flex-direction: column;
        align-items: center;
        text-align: center;
        padding: 20px 0;
    }
</style>