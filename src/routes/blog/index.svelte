<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`blog.json`)
      .then((r) => r.json())
      .then((posts) => {
        return { posts };
      });
  }
</script>

<script>
  //import { allTags } from "./constants";
  export let posts;
  let selectedTags = [];
</script>

<svelte:head>
  <title>Blog</title>
</svelte:head>

<div class="container">
  <h2>Blog</h2>
  <!-- {#each allTags as tagOption}
    <label>
      <input type="checkbox" bind:group={selectedTags} value={tagOption} />
      {tagOption}
    </label>
  {/each} -->
  {#each posts as post, index}
    {#if !selectedTags.length || post.tags.filter((tag) =>
        selectedTags.includes(tag)
      ).length > 0}
      {#if index}
        <hr />
      {/if}
      <div class="post-item">
        <h3>
          <a rel="prefetch" href="blog/{post.slug}">{post.title}</a>
        </h3>
        {#if post.tags.length}
          <div id="tag-block">
            {#each post.tags as tag}
              <h6>{tag}</h6>
            {/each}
          </div>
        {/if}
        <p>{post.excerpt}</p>
        <div class="post-item-footer">
          <span class="post-item-date">— {post.printDate}</span>
        </div>
      </div>
    {/if}
  {/each}
</div>

<style>
  h2,
  .post-item-footer {
    font-family: "Josefin Sans", sans-serif;
    font-weight: 700;
  }

  h2 {
    margin-bottom: 0.2em;
  }

  h6 {
    font-family: "Josefin Sans", sans-serif;
    font-weight: 300;
    border: solid pink 1px;
    border-radius: 5px;
    width: fit-content;
    padding: 0 0.5em;
    margin-right: 0.5em;
  }

  #tag-block {
    display: flex;
  }

  .post-item-date {
    color: #aaa;
    text-align: left;
    text-transform: uppercase;
    margin-right: 16px;
  }

  hr {
    margin: 60px auto;
  }
</style>
