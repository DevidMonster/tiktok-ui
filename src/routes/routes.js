//Layout
import { HeaderOnly } from '~/Layouts';

//routes
import config from '~/config';

//Pages
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
import Live from '~/pages/Live';
import Tag from '~/pages/Tag';

const publicRoutes = [
    { path: config.routes.home, compoment: Home },
    { path: config.routes.following, compoment: Following },
    { path: config.routes.profile, compoment: Profile },
    { path: config.routes.upload, compoment: Upload, layout: HeaderOnly },
    { path: config.routes.search, compoment: Search, layout: null },
    { path: config.routes.live, compoment: Live, layout: null },
    { path: config.routes.tag, compoment: Tag, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
