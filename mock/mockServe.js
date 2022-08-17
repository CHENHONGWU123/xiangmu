// 引入mockjs 模块
import Mock from 'mockjs';

// 把json 数据格式引入进来
import banner from './banner.json';
import floor from './floor.json'

// mock 数据：第一个参数请求地址  第二个参数请求数据
Mock.mock("/mock/banner", { code: 200, data: banner });//模拟首页轮播数据
Mock.mock("/mock/floor", { code: 200, data: floor })