<template>
  <div class="mt-4">
    <router-link to="/Search">
      <el-input placeholder="请输入关键字" class="input-with-select">
        <template #prepend>
          <el-button icon="i-eq-Search" />
        </template>
      </el-input>
    </router-link>
  </div>
  <div class="common-layout">
    <el-container>
      <el-header>
        <p @click="changeValue()">{{header}}</p>
      </el-header>
      <el-main><span>{{bb}}</span>
        <p>{{value}}</p>
      </el-main>
      <el-footer>
        <router-link to="/movie/1">Go to Movie</router-link>
      </el-footer>
    </el-container>
  </div>
</template>
<script  lang="ts" setup>
const header="ww"
const bb="the"
const value=1
function changeValue()
{
  alert(value)
}
</script>

<style>
.input-with-select .el-input-group__prepend {
  background-color: var(--el-fill-color-blank);
}
</style>