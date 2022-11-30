<script>
	import LayoutGrid, { Cell } from "@smui/layout-grid";
    import IconButton from '@smui/icon-button';
    import logo from "./logo.svg";
    import github from "./github.png";
    import instagram from "./instagram.png";
    import twitter from "./twitter.png";
    import linkedin from "./linkedin.png";
    import List, { Item, Text } from '@smui/list';
</script>
<div class="footer-wrapper">
    <hr class="footer-divider"/>
    <LayoutGrid style="padding-top: 1vh; padding-bottom: 0;">
        <Cell span={4}>
            <IconButton ripple={false} href="https://ni.fe.up.pt" target="_blank" class="material-icons" style="transform: scale(1.5); height: 70%;">
                language
            </IconButton>
            <IconButton ripple={false} href="https://facebook.com/NIAEFEUP/" target="_blank" class="material-icons" style="transform: scale(1.5); height: 70%;">
                facebook
            </IconButton>
            <IconButton ripple={false} href="https://github.com/NIAEFEUP" target="_blank" style="transform: scale(1.2); height: 70%;">
                <img src={github} alt="GitHub logo" />
            </IconButton>
            <IconButton ripple={false} href="https://www.instagram.com/niaefeup/" target="_blank" style="transform: scale(1.2); height: 70%;">
                <img src={instagram} alt="Instagram logo" />
            </IconButton>
            <IconButton ripple={false} href="https://twitter.com/niaefeup" target="_blank" style="transform: scale(1.2); height: 70%;">
                <img src={twitter} alt="Twitter logo" />
            </IconButton>
            <IconButton ripple={false} href="https://pt.linkedin.com/company/nifeup" target="_blank" style="transform: scale(1.2); height: 70%;">
                <img src={linkedin} alt="Linkedin logo" />
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
                    <Item>
                        <Text>Rua Dr. Roberto Frias 4200-465, Porto</Text>
                    </Item>
                    <Item>
                        <div style="width: 100%; display: flex; justify-content: end">
                        <Text>Sala B315</Text>
                    </div>
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
    height: 0;
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
