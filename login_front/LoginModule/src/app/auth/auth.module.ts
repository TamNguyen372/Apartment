import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './authlayout/authlayout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthGuard } from './auth.guard';
import { QlchungcuComponent } from './qlchungcu/qlchungcu.component';
import { QlquangcaoComponent } from './qlquangcao/qlquangcao.component';
import { QlhoadonComponent } from './qlhoadon/qlhoadon.component';
import { QlchiphiComponent } from './qlchiphi/qlchiphi.component';
import { QlxeComponent } from './qlxe/qlxe.component';
import { SliderComponent } from './slider/slider.component';
import { HeaderComponent } from './header/header.component';
import { QlphanhoiComponent } from './qlphanhoi/qlphanhoi.component';
import { QlthongbaoComponent } from './qlthongbao/qlthongbao.component';
import { QlcanhoComponent } from './qlcanho/qlcanho.component';
import { LquangcaoComponent } from './lquangcao/lquangcao.component';
import { MucdoComponent } from './mucdo/mucdo.component';
import { LthongbaoComponent } from './lthongbao/lthongbao.component';
import { ChisonuocComponent } from './chisonuoc/chisonuoc.component';
import { LcanhoComponent } from './lcanho/lcanho.component';
import { BlockComponent } from './block/block.component';
import { PtthanhtoanComponent } from './ptthanhtoan/ptthanhtoan.component';
import { PhiquanlyComponent } from './phiquanly/phiquanly.component';
import { PhinuocComponent } from './phinuoc/phinuoc.component';
import { PhixeComponent } from './phixe/phixe.component';
import { ProfileComponent } from './profile/profile.component';
import { ResetpassComponent } from './resetpass/resetpass.component';

@NgModule({
  declarations: [
    LayoutComponent,
    DashboardComponent,
    QlchungcuComponent,
    QlquangcaoComponent,
    QlhoadonComponent,
    QlchiphiComponent,
    QlxeComponent,
    SliderComponent,
    HeaderComponent,
    QlphanhoiComponent,
    QlthongbaoComponent,
    QlcanhoComponent,
    LquangcaoComponent,
    MucdoComponent,
    LthongbaoComponent,
    ChisonuocComponent,
    LcanhoComponent,
    BlockComponent,
    PtthanhtoanComponent,
    PhiquanlyComponent,
    PhinuocComponent,
    PhixeComponent,
    ProfileComponent,
    ResetpassComponent,
  ],
  imports: [CommonModule, AuthRoutingModule],
  providers: [AuthGuard],
})
export class AuthModule {}
