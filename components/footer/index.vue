<template lang="html">
  <footer>
    <div class="footer size margin container wrap text-align-center">
      <div class="flex-grow-1">
        <span>© 2018 Sizify</span>
      </div>
      <div class="share">
        <p>Share</p>
        <ul class="container">
          <li>
            <a href="http://www.facebook.com/sharer.php?u=http://quinalha.me/sizify/" target="_blank">
              <i class="fab fa-facebook"></i>
            </a>
          </li>
          <li>
            <a target="_blank" href="https://twitter.com/share?url=http://quinalha.me/sizify/;text=Preview changes and test on multiple devices instantly with Sizify. #sizify" class="">
              <i class="fab fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="http://www.linkedin.com/shareArticle?mini=true&amp;url=http://quinalha.me/sizify/;text=Preview changes and test on multiple devices instantly." target="_blank">
              <i class="fab fa-linkedin"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>
  export default {}
</script>

<style lang="scss">
  .footer {
    font-size: 14px;
    color: #fff;
    padding: 30px 0;
    text-align: left;
    .share {
      ul {
        list-style: none;
        li {
          a {
            color: #fff;
            text-decoration: none;
            margin: 5px;
            font-size: 20px;
            opacity: .5;
            transition: .3s;
            &:hover {
              opacity: 1;
            }
          }
        }
      }
    }
  }
</style>
