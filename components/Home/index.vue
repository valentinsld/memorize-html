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
        href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element"
      >
        Revise your html tags on MDN
      </a>
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
          title="Table, forms &<br>multimedia"
          tag="Advanced"
          color="orange"
          image="/imgs/Notebook.png"
        />
        <HomeCard
          link-to="level-4"
          title="ROthers"
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
          link-to="/"
          title="Start game !<br>(Soon)"
          tag="Expert"
          color="blue"
          image="/imgs/Processor.png"
        />
      </div>
    </section>

    <footer>
      <p>
        Developed with ❤️ by <a href="https://www.valentinsld.fr/">Valentin sld</a>
      </p>
    </footer>
  </div>
</template>

<script>
import './style.less'

export default {
  name: 'Home'
}
</script>
