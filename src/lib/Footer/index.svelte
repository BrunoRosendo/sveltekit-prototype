<script>
	import LayoutGrid, { Cell } from "@smui/layout-grid";
    import IconButton from '@smui/icon-button';
    import logo from "./logo.svg";
    import List, { Item, Text } from '@smui/list';
</script>
<div class="footer-wrapper">
    <hr class="footer-divider"/>
    <LayoutGrid style="padding-top: 1vh; padding-bottom: 0;">
        <Cell span={4}>
            <IconButton class="material-icons">language</IconButton>
            <IconButton class="material-icons">facebook</IconButton>
            <!--TODO: Replace with social media logos, mui icons not available...-->
            <IconButton>
                <img src={logo} alt="NI logo" />
            </IconButton>
            <IconButton>
                <img src={logo} alt="NI logo" />
            </IconButton>
            <IconButton>
                <img src={logo} alt="NI logo" />
            </IconButton>
            <IconButton>
                <img src={logo} alt="NI logo" />
            </IconButton>
        </Cell>
        <Cell span={4}>
            <div class="centered-cell">
                <List nonInteractive>
                    <Item style="display: flex; justify-content: center; padding-bottom: 5px;">
                        <img class="footer-logo" src={logo} alt="NI logo" />
                    </Item>
                    <Item>
                        <Text style="color: #B33636">© 2022 NIAEFEUP™. All Rights Reserved</Text>
                    </Item>
                </List>
            </div>
        </Cell>
        <Cell span={4}>
            <div class="right-cell">
                <List nonInteractive>
                    <!--TODO: text not aligning end-->
                    <Item>
                        <Text style="text-align: end;">Rua Dr. Roberto Frias 4200-465, Porto</Text>
                    </Item>
                    <Item>
                        <Text style="text-align: end;">Sala B315</Text>
                    </Item>
                </List>
        </div>
        </Cell>
    </LayoutGrid>
</div>

<style>
.footer-divider {
    border-top: 2px solid;
}
.footer-wrapper {
    position: absolute;
    width: 95%;
    left: 2.5%;
    bottom: 0;
    height: 5vh;
}
.footer-logo {
    height: 6vh;
}
.centered-cell {
    display: flex;
    justify-content: center;
    align-items: center;
}
.right-cell {
    display: flex;
    justify-content: right;
    align-items: center;
}
</style>
