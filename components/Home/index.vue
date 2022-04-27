<template>
  <div class="home">
    <header class="home__header">
      <h1 class="header__title">
        Memorize <span>HTML</span>
      </h1>

      <p class="header__baseline">
        Educational games to learn HTML tags<br>
        Because we don’t use tags well enough
      </p>

      <a
        class="header__mdnLink"
        target="_blank"
        href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element"
      >
        Revise your html tags on MDN
      </a>

      <img class="header__img -computer" src="/imgs/Computer@2x.png">
      <img class="header__img -code" src="/imgs/Code@2x.png">
    </header>

    <section class="home__section">
      <h2 class="section__title">
        Game 1 : questions
      </h2>

      <div class="section__cards">
        <HomeCard
          link-to="level-1"
          title="Reviews<br>basics"
          tag="Beginner"
          image="/imgs/Book.png"
        />
        <HomeCard
          link-to="level-2"
          title="Semantics &<br>formatting"
          tag="Beginner"
          image="/imgs/Page.png"
        />
        <HomeCard
          link-to="level-3"
          title="Table, forms<br> & multimedia"
          tag="Advanced"
          color="orange"
          image="/imgs/Notebook.png"
        />
        <HomeCard
          link-to="level-4"
          title="Others"
          tag="Advanced"
          color="orange"
          image="/imgs/Database.png"
        />
        <HomeCard
          link-to="level-5"
          title="GOD mode"
          tag="Expert"
          color="red"
          image="/imgs/shiedlWithStars.png"
        />
      </div>
    </section>

    <section class="home__section">
      <h2 class="section__title">
        Game 2 : memory
      </h2>

      <div class="section__cards">
        <HomeCard
          link-to="/memory"
          title="Start game !"
          tag="Expert"
          color="blue"
          image="/imgs/Processor.png"
        />
      </div>
    </section>

    <footer>
      <p>
        Developed with ❤️ by <a href="https://www.valentinsld.fr/" target="_blank">Valentin sld</a>
      </p>
      <p>
        Icons by <a href="https://free3dicon.com" target="_blank">free3dicon</a>
      </p>
    </footer>

    <div class="home__producthunt">
      <a href="https://www.producthunt.com/posts/memorize-html?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-memorize&#0045;html" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=344229&theme=light" alt="Memorize&#0032;HTML - Educational&#0032;games&#0032;to&#0032;learn&#0032;HTML&#0032;tags&#0046;&#0032; | Product Hunt" style="width: 250px; height: 54px;" width="250" height="54"></a>
    </div>
  </div>
</template>

<script>
import './style.less'

export default {
  name: 'Home'
}
</script>
