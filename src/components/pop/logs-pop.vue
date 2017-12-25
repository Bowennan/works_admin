<template>
  <div class="pop-container">
    <div class="pop-header">
      <span class="pop-title">用户本人操作日志（时间倒叙）</span>
      <Icon class="pop-close" type="close-round" @click.native="closeLog"></Icon>
    </div>

    <div class="pop-sub-container">
      <span class="pop-sub-title">操作积分变化信息</span>
          <Timeline>
            <TimelineItem>
                <p class="time">1976年</p>
                <p class="content">Apple I 问世 
                    <span class="c-carbon">获得积分</span>
                    <span class="c-carbon">454</span>
                </p>
            </TimelineItem>
            <TimelineItem>
                <p class="time">1984年</p>
                <p class="content">发布 Macintosh 
                    <span class="c-carbon">获得积分</span>
                    <span class="c-carbon">454</span>
                </p>
            </TimelineItem>
            <TimelineItem>
                <p class="time">2007年</p>
                <p class="content">发布 iPhone 
                    <span class="c-carbon">获得积分</span>
                    <span class="c-carbon">454</span>
                </p>
            </TimelineItem>
            <TimelineItem>
                <p class="time">2010年</p>
                <p class="content">发布 iPad 
                    <span class="c-carbon">获得积分</span>
                    <span class="c-carbon">454</span>
                </p>
            </TimelineItem>
            <TimelineItem>
                <p class="time">2011年10月5日</p>
                <p class="content">史蒂夫·乔布斯去世 
                    <span class="c-carbon">获得积分</span>
                    <span class="c-carbon">454</span>
                </p>
            </TimelineItem>
        </Timeline>
    </div>

    <div class="pop-bottom-box">
      <Button class="pop-confirm-btn" type="ghost" @click="closeLog">取消</Button>
      <Button class="pop-confirm-btn" type="primary" @click="closeLog">确认</Button>
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
      closeLog() {
        this.$emit('close')
      }
    }
  }
</script>