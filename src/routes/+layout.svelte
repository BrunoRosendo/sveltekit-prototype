<script>
    import Navbar from "$lib/NavBar/index.svelte";
</script>

<Navbar/>

<main>
    <slot></slot>
</main>

<style>
main {
    margin: 1vw 2vw 1vw 2vw;
    display: flex;
    color: white;
}
</style>
