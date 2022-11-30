<script>
    import Navbar from "$lib/NavBar/index.svelte";
    import Footer from "$lib/Footer/index.svelte";
</script>

<Navbar/>

<main>
    <slot></slot>
</main>

<Footer/>

<style>
main {
    margin: 1vw 2vw 1vw 2vw;
    color: white;
}
</style>
