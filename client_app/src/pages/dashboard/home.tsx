import Content from 'src/components/Content';
import Meta from 'src/components/Meta';
import { useMe } from 'src/context/AuthContext';
import DashboardLayout from 'src/layouts/DashboardLayout';
import React from 'react';

export default function Home() {
  return (
    <DashboardLayout>
      <Meta title="Checkgate - Dashboard" />
      <Content.Container>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet esse
          dolores hic rem temporibus tempora quisquam, molestias ipsam, officia,
          quo qui laboriosam vel minima voluptate enim dolore molestiae illum
          cumque? Nobis neque, minus eveniet consequatur ex voluptatum quibusdam
          porro, optio tempore debitis molestias assumenda, quae cupiditate
          architecto nihil labore? Sequi?
        </div>
      </Content.Container>
    </DashboardLayout>
  );
}
