<script>
	import TopAppBar, { Row, Section } from '@smui/top-app-bar';
	import Button, { Label } from '@smui/button';
	import logo from './logo.png';
</script>

<TopAppBar variant="static" dense={true} color="primary" style="z-index: 2;">
	<Row>
		<Section>
			<div class="navbar-button">
				<Button>
					<Label>Equipa</Label>
				</Button>
			</div>
			<div class="navbar-button">
				<Button>
					<Label>Projetos</Label>
				</Button>
			</div>
		</Section>
		<Section>
			<a href="/"><img src={logo} alt="NI logo" /></a>
		</Section>
		<Section align="end" toolbar>
			<div class="navbar-button">
				<Button>
					<Label>Eventos</Label>
				</Button>
			</div>
			<div class="navbar-button">
				<Button>
					<Label>Contactos</Label>
				</Button>
			</div>
		</Section>
	</Row>
</TopAppBar>

<style>
	.navbar-button {
		padding-left: 1vw;
		padding-right: 1vw;
	}
	img,
	a {
		height: 90%;
		width: 100%;
		object-fit: contain;
	}
</style>
