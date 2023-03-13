<script>
  import CustomerTestimorial from "@components/layout/testimorials/CustomerTestimorial.svelte";
</script>

<section>
  <img
    class="background-image"
    src="/assets/images/hero/hero-1.webp"
    alt="Rainy Days in nature"
  />
  <h2>What our customers say</h2>

  <div class="testimorial-section-grid">
    <CustomerTestimorial
      name={"Sarah"}
      userName={"@sarahTheHiker"}
      text={"Found my perfect go-to rain jacket for outdoor adventures! These jackets from @RainyDays are super durable and keep me comfortable no matter the weather. #PushingTheComfortZone #Hiking #Exploring"}
    />
    <CustomerTestimorial
      name={"David"}
      userName={"@skiiingDude"}
      text={"Never worry about the weather again! @RainyDays's rain jackets are perfect for any outdoor activity. I can now ski with confidence knowing I'm protected. #PushingTheComfortZone #Skiing"}
    />
    <CustomerTestimorial
      name={"Monica"}
      userName={"@happyCamper"}
      text={"I'm in love with my new rain jacket from @RainyDays. The sleek design is perfect for any adventure, and it keeps me dry and comfortable! #PushingTheComfortZone #Explorer"}
    />
  </div>
</section>

<style>
  section {
    /* max-width: 1800px; */
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0 auto;
    overflow: hidden;
    position: relative;
  }

  h2 {
    color: var(--clr-white);
    font-size: 3rem;
    font-weight: bold;
    text-align: center;
    margin-top: 2rem;
  }

  .background-image {
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.5;
  }
  .testimorial-section-grid {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;
    justify-items: center;
    max-width: 1800px;
    padding: 4rem;
  }
</style>
