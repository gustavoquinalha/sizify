<template lang="html">
  <div class="size margin">
    <div class="faq">
      <div class="box-title text-align-center">
        <h2>Do you have<br>any question?</h2>
      </div>
    </div>

    <div class="questions container wrap align-items-strech justify-content-center">
      <div class="questions__items flex-basis-400" v-for="x in questions">
        <h3>{{x.question}}</h3>
        <p>{{x.answer}}</p>
      </div>
    </div>

    <footerBottom/>
  </div>
</template>

<script>
  import footerBottom from '~/components/footer'
  export default {
    name: 'faq',
    data() {
      return {
        questions: [{
          id: 0,
          question: 'Why are some sites showing as a blank white box?',
          answer: 'Some websites are configured to prevent embedding into another site. Sizify is showing the devices by embedding a website in multiple iframes. Unfortunately, this is configured from their side and theres nothing we can do about it, at least in the web version of Sizify. The Chrome Extension can overcome this problem on some websites, but not on all of them.'
        }, {
          id: 1,
          question: 'How can I add devices sizes?',
          answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.'
        }, {
          id: 2,
          question: 'Why are some sites showing as a blank white box?',
          answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        }, {
          id: 3,
          question: 'How can I add devices sizes?',
          answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        }]
      }
    },
    components: {
      footerBottom
    }
  }
</script>

<style lang="scss" scoped>
  .faq {
    margin-top: 100px;
  }

  .questions {
    width: 800px;
    max-width: 100%;
    margin: 100px auto 0;
    .questions__items {
      padding: 20px;
      margin-bottom: 30px;
      box-sizing: border-box;
      h3 {
        margin-bottom: 10px;
        color: $white;
      }
      p {
        color: $grey;
      }
    }
  }
</style>
