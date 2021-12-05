import {
  createApp,
} from 'vue';

import {
  Layout, LayoutSider, Menu, MenuItem, LayoutHeader, LayoutContent,
} from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import router from './router';

const app = createApp({
  render() {
    return (
      <Layout>
        <LayoutSider collapsible>
          <div class="logo" />
          <Menu>
            <MenuItem key="2">
              <span>协议</span>
            </MenuItem>
            <MenuItem key="2">
              <span>用户</span>
            </MenuItem>
            <MenuItem key="2">
              <span>客户端</span>
            </MenuItem>
          </Menu>
        </LayoutSider>
        <Layout>
          <LayoutHeader>

          </LayoutHeader>
          <LayoutContent style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }">
            Content
          </LayoutContent>
        </Layout>
      </Layout>
    );
  },
});
app.use(router);
app.mount('#app');
