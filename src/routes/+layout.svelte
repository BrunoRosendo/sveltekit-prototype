<script>
    import Navbar from "$lib/NavBar/index.svelte";
    import Footer from "$lib/Footer/index.svelte";
</script>

<Navbar/>

<main>
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
    margin: 1vw 2vw 0 2vw;
    padding-bottom: 10vh;
}
</style>
