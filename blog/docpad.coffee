module.exports =
  collections:
      posts: ->
          @getCollection("html").findAllLive({relativeOutDirPath: 'posts'},[{date:-1}])

  plugins:
    rss:
      default:
        collection: 'posts'
        url: '/rss.xml'

    # grunt:
    #   generateAfter: ["imgminify"]
