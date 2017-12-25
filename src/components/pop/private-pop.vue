<template>
  <div class="pop-container">
    <div class="pop-header">
      <span class="pop-title">私信查看（时间倒叙）</span>
      <Icon class="pop-close" type="close-round" @click.native="closePrivate"></Icon>
    </div>

    <div class="pop-sub-container">
      <span class="pop-sub-title">私信列表</span>
          <Timeline>
            <TimelineItem>
                <p class="time">1976年</p>
                <p class="content">Apple I 问世 
                    <span class="c-azul">用户XXX</span>
                    私信
                    <span class="pop-check-out c-azul">查看详情</span>
                </p>
            </TimelineItem>
            <TimelineItem>
                <p class="time">1984年</p>
                <p class="content">发布 Macintosh 
                    <span class="c-azul">用户XXX</span>
                    私信
                    <span class="pop-check-out c-azul">查看详情</span>
                </p>
            </TimelineItem>
            <TimelineItem>
                <p class="time">2007年</p>
                <p class="content">发布 iPhone 
                    <span class="c-azul">用户XXX</span>
                    私信
                    <span class="pop-check-out c-azul">查看详情</span>
                </p>
            </TimelineItem>
            <TimelineItem>
                <p class="time">2010年</p>
                <p class="content">发布 iPad 
                    <span class="c-azul">用户XXX</span>
                    私信
                    <span class="pop-check-out c-azul">查看详情</span>
                </p>
            </TimelineItem>
            <TimelineItem>
                <p class="time">2011年10月5日</p>
                <p class="content">史蒂夫·乔布斯去世 
                    <span class="c-azul">用户XXX</span>
                    私信
                    <span class="pop-check-out c-azul">查看详情</span>
                </p>
            </TimelineItem>
        </Timeline>
    </div>

    <div class="pop-bottom-box">
      <Button class="pop-confirm-btn" type="ghost" @click="closePrivate">取消</Button>
      <Button class="pop-confirm-btn" type="primary" @click="closePrivate">确认</Button>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        check01:true,
        check02:true,
        infos:'无'
      }
    },
    methods: {
      closePrivate() {
        this.$emit('close')
      }
    }
  }
</script>