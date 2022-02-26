import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { QlchungcuComponent } from './qlchungcu/qlchungcu.component';
import { QlquangcaoComponent } from './qlquangcao/qlquangcao.component';
import { QlhoadonComponent } from './qlhoadon/qlhoadon.component';
import { QlchiphiComponent } from './qlchiphi/qlchiphi.component';
import { QlxeComponent } from './qlxe/qlxe.component';
import { QlphanhoiComponent } from './qlphanhoi/qlphanhoi.component';
import { QlthongbaoComponent } from './qlthongbao/qlthongbao.component';
import { QlcanhoComponent } from './qlcanho/qlcanho.component';
import { LquangcaoComponent } from './lquangcao/lquangcao.component';
import { MucdoComponent } from './mucdo/mucdo.component';
import { BlockComponent } from './block/block.component';
import { ChisonuocComponent } from './chisonuoc/chisonuoc.component';
import { LcanhoComponent } from './lcanho/lcanho.component';
import { LthongbaoComponent } from './lthongbao/lthongbao.component';
import { PhinuocComponent } from './phinuoc/phinuoc.component';
import { PhiquanlyComponent } from './phiquanly/phiquanly.component';
import { PhixeComponent } from './phixe/phixe.component';
import { PtthanhtoanComponent } from './ptthanhtoan/ptthanhtoan.component';
import { ProfileComponent } from './profile/profile.component';
import { ResetpassComponent } from './resetpass/resetpass.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'qlchungcu',
    component: QlchungcuComponent,
  },
  {
    path: 'qlquangcao',
    component: QlquangcaoComponent,
  },
  {
    path: 'lquangcao',
    component: LquangcaoComponent,
  },
  {
    path: 'qlphanhoi',
    component: QlphanhoiComponent,
  },
  {
    path: 'mucdo',
    component: MucdoComponent,
  },
  {
    path: 'qlthongbao',
    component: QlthongbaoComponent,
  },
  {
    path: 'lthongbao',
    component: LthongbaoComponent,
  },
  {
    path: 'chisonuoc',
    component: ChisonuocComponent,
  },
  {
    path: 'qlcanho',
    component: QlcanhoComponent,
  },
  {
    path: 'lcanho',
    component: LcanhoComponent,
  },
  {
    path: 'block',
    component: BlockComponent,
  },
  {
    path: 'ptthanhtoan',
    component: PtthanhtoanComponent,
  },
  {
    path: 'qlhoadon',
    component: QlhoadonComponent,
  },
  
  {
    path: 'qlchiphi',
    component: QlchiphiComponent,
  },
  {
    path: 'phiquanly',
    component: PhiquanlyComponent,
  },
  {
    path: 'phinuoc',
    component: PhinuocComponent,
  },
  {
    path: 'phixe',
    component: PhixeComponent,
  },
  {
    path: 'qlxe',
    component: QlxeComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: 'resetpass',
    component: ResetpassComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}