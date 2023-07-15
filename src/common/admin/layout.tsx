import {Layout, LayoutProps} from 'react-admin';

import { CustomAppBar } from './appBar';

export const CustomLayout = (props: LayoutProps) => <Layout {...props} appBar={CustomAppBar} />;