<script>
  export let segment;
</script>

<header>
  <h6>{segment !== undefined ? "Letters to Mila" : ""}</h6>
  <nav>
    <a class={segment === undefined ? "selected" : ""} href=".">home</a>
    <a class={segment === "about" ? "selected" : ""} href="about">about</a>
    <a rel="prefetch" class={segment === "blog" ? "selected" : ""} href="blog">
      blog
    </a>
  </nav>
</header>

<style>
  header {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  nav {
    align-items: flex-end;
    display: flex;
    flex: 1;
    font-family: "Josefin Sans", sans-serif;
    font-weight: 700;
    justify-content: flex-end;
    text-transform: uppercase;
  }

  a,
  h6 {
    color: inherit;
    text-decoration: none;
    padding: 10px 5px;
    display: block;
    position: relative;
    margin-left: 20px;
  }

  a:not(.selected) {
    opacity: 0.7;
  }

  a::before {
    content: "";
    position: absolute;
    transition: transform 0.3s ease;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2px;
    background: #aaa;
    transform: scaleX(0);
  }

  a:hover::before,
  .selected::before {
    transform: scaleX(1);
  }

  .selected::before {
    background: #fd6378;
  }
</style>
