<script>
  export let name;
  export let userName;
  export let text;
</script>

<div class="user-testimorial">
  <div class="name-and-username">
    <h3>{name}</h3>
    <h4>{userName}</h4>
  </div>
  <p>{text}</p>
</div>

<style>
  .user-testimorial {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    border: solid 1px var(--user-testimorial-border);
    padding: 1rem;
    max-width: 500px;

    backdrop-filter: blur(10px) brightness(0.8);
  }

  .name-and-username {
    display: flex;
    gap: 0.5rem;
    align-items: center;
  }

  h3 {
    color: var(--clr-white);
    font-weight: bold;
    font-size: 1.2rem;
  }

  h4 {
    color: var(--clr-light-grey);
    font-weight: 400;
  }
</style>
