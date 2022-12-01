<script>
    import Navbar from "$lib/NavBar/index.svelte";
    import Footer from "$lib/Footer/index.svelte";
</script>

<Navbar/>

<main>
    <div class="gradient-background"></div>
    <div class="page-content">
        <slot></slot>
    </div>
    <Footer/>
</main>

<style>
main {
    color: white;
    min-height: 100%;
    position: relative;
}
.page-content {
    margin: 0 2vw 0 2vw;
    padding-bottom: 5vh;
    position: relative;
    z-index: 1;
}
.gradient-background {
    background: linear-gradient(#831f20, #411315);
    height: 25%;
    left: 0;
    top: 0;
    position: absolute;
    width: 100%;
}
</style>
