<template lang="pug">
  .columns
    .column.is-8.is-offset-2
      a.button.is-light.is-loading(v-show="isLoading")
      div.col-l-wrap
        article.post(v-for="entry in sortedEntries")
          div.flex-wrapper
            div.col-l.widfix-sp
              div.com-calendindinav
                div.wrap-bg
                  div.inner
                    div.year-month
                      div.ym-inner.wf-a
                        div.ym-txt
                          span.ym-year
                            | {{ entry.date | YYYY }}
                          span.ym-month
                            | {{ entry.date | MM }}
                        p.date.wf-a
                          | {{ entry.date | DD }}
            div.col-r.widfix-sp
              div.inner.title-wrap
                h1.title
                  | {{ entry.title }}
            div.box-article(v-html="entry.body")
          div.footer-wrapper
            div.twitter-share-button-wrapper
              a.twitter-share-button(href="https://twitter.com/share?ref_src=twsrc%5Etfw", :data-text="entry.title", :data-url="'https://re-fort.net/SkrzkBlogArchive/#/blog/'+author.link+'/'+date+'/'+entry.id", data-size="large" data-show-count="false")
                | ツイート
            div
              router-link(:to="date+'/'+entry.id")
                | 個別ページ
          Adsense(data-ad-client="ca-pub-6267609390272538" data-ad-slot="7499655186")
</template>

<script>
  import Adsense from 'vue-google-adsense/dist/Adsense.min.js'
  Vue.use(require('vue-script2'))
  Vue.use(Adsense)

  export default {
    name: 'Entry',
    props: {
      author: {
        type: Object,
      },
      entries: {
        type: Array,
      },
      date: {
        type: String,
      },
      sort: {
        type: String,
        default: 'date',
      },
      order: {
        type: String,
        default: 'asc',
      },
      sortEntries: {
        type: Function,
      },
      isLoading: {
        type: Boolean,
      },
    },
    updated () {
      if (window.twttr) {
        window.twttr.widgets.load();
      }
    },
    computed: {
      sortedEntries () {
        return this.sortEntries(this.sort, this.order)
      },
    },
  }
</script>

<style lang="sass" scoped>
  @import "src/stylesheets/variables"

  .is-loading
    width: 100%

  .col-l-wrap
    width: 100%
    padding: 0 27px
    word-wrap: break-word
    flex-wrap: wrap
    display: flex
    -webkit-box-orient: horizontal
    -webkit-box-direction: normal
    flex-direction: row

  article.post
    width: 100%
    padding: 0

    .flex-wrapper
      display: flex
      flex-wrap: wrap

    .col-l.widfix-sp
      width: 17%
      max-width: 75px

    .com-calendindinav .wrap-bg
      padding: 4px
      border-right: 1px solid #BDBEBE
      border-bottom: 1px solid #BDBEBE

    .com-calendindinav .wrap-bg>.inner
      width: 100%
      position: relative
      padding-top: 0
      text-align: center

    .com-calendindinav .year-month
      position: relative
      letter-spacing: 0.2em

    .com-calendindinav .year-month:before
      content: ""
      display: block
      padding-top: 100%

    .com-calendindinav .year-month .ym-inner
      position: absolute
      top: 0
      left: 0
      bottom: 0
      right: 0
      display: -webkit-box
      display: -ms-flexbox
      display: flex
      -webkit-box-orient: vertical
      -webkit-box-direction: normal
      -ms-flex-direction: column
      flex-direction: column
      -webkit-box-pack: justify
      -ms-flex-pack: justify
      justify-content: space-between

    .com-calendindinav .year-month .ym-inner:before
      background-image: linear-gradient(-45deg, transparent 49.4%,#CCC 49.4%, #CCC 50.6%, transparent 50.6%, transparent)
      content: ""
      position: absolute
      display: block
      width: 100%
      height: 100%

    .wf-a
      font-family: 'Roboto Condensed', sans-serif

    .com-calendindinav .year-month .ym-txt
      font-size: 10px
      line-height: 1.2
      margin-top: 0
      text-align: left

    .com-calendindinav .year-month .ym-txt>span
      display: block

    .com-calendindinav .year-month .date
      font-size: 20px
      text-align: right

    .col-r.widfix-sp
      padding-left: 5px
      width: 83%
      display: flex
      align-items: flex-end

    .col-r.widfix-sp>.inner
      border-bottom: 1px solid #BDBEBE
      width: 100%

    .title-wrap
      height: 100%
      display: table

    .title
      display: table-cell
      vertical-align: middle
      font-size: 15px
      font-weight: 300
      line-height: 1.4
      margin-bottom: 0
      padding-left: 0.5em

    .box-article
      font-size: 14px
      line-height: 2
      letter-spacing: 0.2em
      word-break: break-all
      padding-left: 0
      padding-right: 0

  .footer-wrapper
    display: flex
    justify-content: flex-start
    margin-bottom: 2rem

  .twitter-share-button-wrapper
    margin-right: auto
</style>
