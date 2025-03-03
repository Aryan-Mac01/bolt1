export const brands = [
    {
      id: 'dell',
      name: 'Dell',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Dell_logo_2016.svg/1200px-Dell_logo_2016.svg.png'
    },
    {
      id: 'hpe',
      name: 'HPE',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Hewlett_Packard_Enterprise_logo.svg/1200px-Hewlett_Packard_Enterprise_logo.svg.png'
    },
    {
      id: 'cisco',
      name: 'Cisco',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Cisco_logo_blue_2016.svg/1200px-Cisco_logo_blue_2016.svg.png'
    },
    {
      id: 'jabra',
      name: 'Jabra',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Jabra_logo.svg/2560px-Jabra_logo.svg.png'
    },
    {
      id: 'poly',
      name: 'Poly',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Poly_Inc_logo.svg/2560px-Poly_Inc_logo.svg.png'
    },
    {
      id: 'bose',
      name: 'Bose',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Bose_logo.svg/2560px-Bose_logo.svg.png'
    },
    {
      id: 'grandstream',
      name: 'Grandstream',
      logo: 'https://www.grandstream.com/hubfs/grandstream-logo-blue.png'
    },
    {
      id: 'mikrotik',
      name: 'Mikrotik',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/MikroTik_logo.svg/2560px-MikroTik_logo.svg.png'
    },
    {
      id: 'razer',
      name: 'Razer',
      logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/40/Razer_snake_logo.svg/1200px-Razer_snake_logo.svg.png'
    },
    {
      id: 'jbl',
      name: 'JBL',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/JBL_logo.svg/2560px-JBL_logo.svg.png'
    },
    {
      id: 'ubiquiti',
      name: 'Ubiquiti',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Ubiquiti_logo.svg/2560px-Ubiquiti_logo.svg.png'
    }
  ];
  
  export const products = [
    // Dell Products
    {
      id: 'dell-1',
      brandId: 'dell',
      name: 'Dell XPS 13',
      description: 'Ultra-thin and light laptop with InfinityEdge display',
      price: '$1,299.99',
      image: 'https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'dell-2',
      brandId: 'dell',
      name: 'Dell Precision 5560',
      description: 'Workstation-class performance in a thin and light design',
      price: '$1,899.99',
      image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'dell-3',
      brandId: 'dell',
      name: 'Dell UltraSharp 27 4K Monitor',
      description: 'Professional-grade monitor with exceptional color accuracy',
      price: '$699.99',
      image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'dell-4',
      brandId: 'dell',
      name: 'Dell PowerEdge R740',
      description: 'Enterprise server with scalable performance',
      price: '$2,499.99',
      image: 'https://images.unsplash.com/photo-1597852074816-d933c7d2b988?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'dell-5',
      brandId: 'dell',
      name: 'Dell Latitude 7420',
      description: 'Business laptop with enhanced security features',
      price: '$1,499.99',
      image: 'https://images.unsplash.com/photo-1588702547923-7093a6c3ba33?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'dell-6',
      brandId: 'dell',
      name: 'Dell OptiPlex 7090',
      description: 'Compact desktop for business environments',
      price: '$899.99',
      image: 'https://images.unsplash.com/photo-1591370874773-6702e8f12fd8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
  
    // HPE Products
    {
      id: 'hpe-1',
      brandId: 'hpe',
      name: 'HPE ProLiant DL380 Gen10',
      description: 'Industry-leading server for multi-workload computing',
      price: '$3,499.99',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'hpe-2',
      brandId: 'hpe',
      name: 'HPE Nimble Storage',
      description: 'Flash storage with predictive analytics',
      price: '$15,999.99',
      image: 'https://images.unsplash.com/photo-1563770660941-10a63607957a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'hpe-3',
      brandId: 'hpe',
      name: 'HPE Aruba Access Points',
      description: 'Enterprise-grade wireless networking solution',
      price: '$799.99',
      image: 'https://images.unsplash.com/photo-1551703599-2a1f2c7d7f13?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'hpe-4',
      brandId: 'hpe',
      name: 'HPE SimpliVity',
      description: 'Hyperconverged infrastructure for enterprise workloads',
      price: '$18,999.99',
      image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'hpe-5',
      brandId: 'hpe',
      name: 'HPE GreenLake',
      description: 'As-a-service cloud platform for hybrid environments',
      price: 'Custom Pricing',
      image: 'https://images.unsplash.com/photo-1607799279861-4dd421887fb3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'hpe-6',
      brandId: 'hpe',
      name: 'HPE Synergy',
      description: 'Composable infrastructure platform',
      price: '$11,999.99',
      image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
  
    // Cisco Products
    {
      id: 'cisco-1',
      brandId: 'cisco',
      name: 'Cisco Catalyst 9300',
      description: 'Enterprise-class stackable access switch',
      price: '$5,999.99',
      image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'cisco-2',
      brandId: 'cisco',
      name: 'Cisco Webex Room Kit',
      description: 'All-in-one video conferencing system',
      price: '$7,999.99',
      image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'cisco-3',
      brandId: 'cisco',
      name: 'Cisco Meraki MR46',
      description: 'Cloud-managed wireless access point',
      price: '$1,299.99',
      image: 'https://images.unsplash.com/photo-1551703599-2a1f2c7d7f13?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'cisco-4',
      brandId: 'cisco',
      name: 'Cisco ASA 5500-X',
      description: 'Next-generation firewall appliance',
      price: '$3,499.99',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'cisco-5',
      brandId: 'cisco',
      name: 'Cisco IP Phone 8800',
      description: 'Advanced business desk phone',
      price: '$399.99',
      image: 'https://images.unsplash.com/photo-1516387938699-a93567ec168e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'cisco-6',
      brandId: 'cisco',
      name: 'Cisco UCS C240 M5',
      description: 'Rack server for compute-intensive workloads',
      price: '$8,999.99',
      image: 'https://images.unsplash.com/photo-1597852074816-d933c7d2b988?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
  
    // Jabra Products
    {
      id: 'jabra-1',
      brandId: 'jabra',
      name: 'Jabra Elite 85t',
      description: 'True wireless earbuds with advanced noise cancellation',
      price: '$229.99',
      image: 'https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'jabra-2',
      brandId: 'jabra',
      name: 'Jabra Evolve2 85',
      description: 'Premium business headset for concentration and collaboration',
      price: '$449.99',
      image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'jabra-3',
      brandId: 'jabra',
      name: 'Jabra Speak 750',
      description: 'Premium speakerphone for virtual meetings',
      price: '$329.99',
      image: 'https://images.unsplash.com/photo-1589003077984-894e133f8525?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'jabra-4',
      brandId: 'jabra',
      name: 'Jabra PanaCast 50',
      description: 'Intelligent video bar for inclusive meetings',
      price: '$1,195.00',
      image: 'https://images.unsplash.com/photo-1581092921461-7d65ca45ec1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'jabra-5',
      brandId: 'jabra',
      name: 'Jabra Elite 45h',
      description: 'On-ear wireless headphones with exceptional battery life',
      price: '$99.99',
      image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'jabra-6',
      brandId: 'jabra',
      name: 'Jabra Engage 75',
      description: 'Premium wireless headset for customer conversations',
      price: '$359.99',
      image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
  
    // Poly Products
    {
      id: 'poly-1',
      brandId: 'poly',
      name: 'Poly Voyager Focus 2',
      description: 'Premium stereo Bluetooth headset with ANC',
      price: '$299.99',
      image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'poly-2',
      brandId: 'poly',
      name: 'Poly Studio P15',
      description: 'Personal video bar for professional-quality video',
      price: '$599.99',
      image: 'https://images.unsplash.com/photo-1581092921461-7d65ca45ec1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'poly-3',
      brandId: 'poly',
      name: 'Poly Sync 40',
      description: 'Smart speakerphone for conference rooms',
      price: '$249.99',
      image: 'https://images.unsplash.com/photo-1589003077984-894e133f8525?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'poly-4',
      brandId: 'poly',
      name: 'Poly CCX 600',
      description: 'Business media desk phone with color touchscreen',
      price: '$399.99',
      image: 'https://images.unsplash.com/photo-1516387938699-a93567ec168e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'poly-5',
      brandId: 'poly',
      name: 'Poly Blackwire 8225',
      description: 'Premium corded UC headset with ANC',
      price: '$199.99',
      image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'poly-6',
      brandId: 'poly',
      name: 'Poly Studio X50',
      description: 'All-in-one video bar for medium rooms',
      price: '$2,299.99',
      image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
  
    // Add similar product entries for the remaining brands
    // Bose Products
    {
      id: 'bose-1',
      brandId: 'bose',
      name: 'Bose QuietComfort 45',
      description: 'Wireless noise cancelling headphones',
      price: '$329.99',
      image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'bose-2',
      brandId: 'bose',
      name: 'Bose Smart Soundbar 900',
      description: 'Premium soundbar with Dolby Atmos',
      price: '$899.99',
      image: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'bose-3',
      brandId: 'bose',
      name: 'Bose SoundLink Revolve+ II',
      description: 'Portable Bluetooth speaker with 360° sound',
      price: '$329.99',
      image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'bose-4',
      brandId: 'bose',
      name: 'Bose Frames Tempo',
      description: 'Audio sunglasses for sports',
      price: '$249.99',
      image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'bose-5',
      brandId: 'bose',
      name: 'Bose QuietComfort Earbuds',
      description: 'Noise cancelling true wireless earbuds',
      price: '$279.99',
      image: 'https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'bose-6',
      brandId: 'bose',
      name: 'Bose TV Speaker',
      description: 'Compact soundbar for TV',
      price: '$279.99',
      image: 'https://images.unsplash.com/photo-1595246007497-68e7aaa84ed4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
  
    // Grandstream Products
    {
      id: 'grandstream-1',
      brandId: 'grandstream',
      name: 'Grandstream GRP2615',
      description: 'Carrier-grade IP phone',
      price: '$159.99',
      image: 'https://images.unsplash.com/photo-1516387938699-a93567ec168e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'grandstream-2',
      brandId: 'grandstream',
      name: 'Grandstream GWN7660',
      description: 'Enterprise Wi-Fi 6 access point',
      price: '$169.99',
      image: 'https://images.unsplash.com/photo-1551703599-2a1f2c7d7f13?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'grandstream-3',
      brandId: 'grandstream',
      name: 'Grandstream UCM6300',
      description: 'IP PBX appliance',
      price: '$599.99',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'grandstream-4',
      brandId: 'grandstream',
      name: 'Grandstream GVC3210',
      description: 'Video conferencing system',
      price: '$799.99',
      image: 'https://images.unsplash.com/photo-1581092921461-7d65ca45ec1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'grandstream-5',
      brandId: 'grandstream',
      name: 'Grandstream GSC3570',
      description: 'HD intercom and facility control endpoint',
      price: '$199.99',
      image: 'https://images.unsplash.com/photo-1585399000684-d2f72660f092?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'grandstream-6',
      brandId: 'grandstream',
      name: 'Grandstream GDS3710',
      description: 'HD video door system',
      price: '$399.99',
      image: 'https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
  
    // Mikrotik Products
    {
      id: 'mikrotik-1',
      brandId: 'mikrotik',
      name: 'MikroTik CCR2004-1G-12S+2XS',
      description: 'Cloud Core Router with 12 SFP+ ports',
      price: '$849.00',
      image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'mikrotik-2',
      brandId: 'mikrotik',
      name: 'MikroTik hAP ac³',
      description: 'Dual-band home access point',
      price: '$99.95',
      image: 'https://images.unsplash.com/photo-1551703599-2a1f2c7d7f13?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'mikrotik-3',
      brandId: 'mikrotik',
      name: 'MikroTik CRS326-24S+2Q+',
      description: 'Cloud Router Switch with 24 SFP+ ports',
      price: '$599.00',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'mikrotik-4',
      brandId: 'mikrotik',
      name: 'MikroTik wAP ac',
      description: 'Weatherproof dual-band wireless access point',
      price: '$99.95',
      image: 'https://images.unsplash.com/photo-1551703599-2a1f2c7d7f13?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'mikrotik-5',
      brandId: 'mikrotik',
      name: 'MikroTik RB5009UG+S+IN',
      description: 'High-performance router with 9 ports',
      price: '$219.00',
      image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'mikrotik-6',
      brandId: 'mikrotik',
      name: 'MikroTik LHG 5',
      description: 'Lightweight high-gain 5GHz CPE',
      price: '$89.00',
      image: 'https://images.unsplash.com/photo-1551703599-2a1f2c7d7f13?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
  
    // Razer Products
    {
      id: 'razer-1',
      brandId: 'razer',
      name: 'Razer BlackShark V2 Pro',
      description: 'Wireless gaming headset with THX Spatial Audio',
      price: '$179.99',
      image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'razer-2',
      brandId: 'razer',
      name: 'Razer Huntsman V2',
      description: 'Optical gaming keyboard with analog switches',
      price: '$199.99',
      image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'razer-3',
      brandId: 'razer',
      name: 'Razer DeathAdder V3 Pro',
      description: 'Wireless gaming mouse with Focus Pro 30K optical sensor',
      price: '$149.99',
      image: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'razer-4',
      brandId: 'razer',
      name: 'Razer Blade 15',
      description: 'Advanced gaming laptop with RTX graphics',
      price: '$2,499.99',
      image: 'https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'razer-5',
      brandId: 'razer',
      name: 'Razer Kiyo Pro',
      description: 'USB camera with adaptive light sensor',
      price: '$199.99',
      image: 'https://images.unsplash.com/photo-1581092921461-7d65ca45ec1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'razer-6',
      brandId: 'razer',
      name: 'Razer Nommo Pro',
      description: 'Premium 2.1 gaming speaker system',
      price: '$599.99',
      image: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
  
    // JBL Products
    {
      id: 'jbl-1',
      brandId: 'jbl',
      name: 'JBL Quantum 800',
      description: 'Wireless over-ear performance gaming headset with ANC',
      price: '$199.95',
      image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'jbl-2',
      brandId: 'jbl',
      name: 'JBL Flip 6',
      description: 'Portable waterproof Bluetooth speaker',
      price: '$129.95',
      image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'jbl-3',
      brandId: 'jbl',
      name: 'JBL Bar 5.1 Surround',
      description: 'Soundbar with MultiBeam surround sound',
      price: '$599.95',
      image: 'https://images.unsplash.com/photo-1595246007497-68e7aaa84ed4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'jbl-4',
      brandId: 'jbl',
      name: 'JBL Tour Pro 2',
      description: 'True wireless earbuds with smart charging case',
      price: '$249.95',
      image: 'https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'jbl-5',
      brandId: 'jbl',
      name: 'JBL PartyBox 310',
      description: 'Portable party speaker with light show',
      price: '$499.95',
      image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'jbl-6',
      brandId: 'jbl',
      name: 'JBL Tune 760NC',
      description: 'Wireless over-ear headphones with noise cancellation',
      price: '$129.95',
      image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
  
    // Ubiquiti Products
    {
      id: 'ubiquiti-1',
      brandId: 'ubiquiti',
      name: 'Ubiquiti UniFi 6 Pro',
      description: 'Wi-Fi 6 access point for high-density environments',
      price: '$179.00',
      image: 'https://images.unsplash.com/photo-1551703599-2a1f2c7d7f13?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'ubiquiti-2',
      brandId: 'ubiquiti',
      name: 'Ubiquiti UniFi Dream Machine Pro',
      description: 'All-in-one network appliance',
      price: '$379.00',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'ubiquiti-3',
      brandId: 'ubiquiti',
      name: 'Ubiquiti UniFi Switch Pro 24 PoE',
      description: 'Managed PoE+ gigabit switch with SFP+',
      price: '$699.00',
      image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'ubiquiti-4',
      brandId: 'ubiquiti',
      name: 'Ubiquiti UniFi Protect G4 Bullet',
      description: 'Weatherproof 4K security camera',
      price: '$199.00',
      image: 'https://images.unsplash.com/photo-1585399000684-d2f72660f092?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'ubiquiti-5',
      brandId: 'ubiquiti',
      name: 'Ubiquiti UniFi Building-to-Building Bridge',
      description: 'Point-to-point wireless bridge',
      price: '$499.00',
      image: 'https://images.unsplash.com/photo-1551703599-2a1f2c7d7f13?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'ubiquiti-6',
      brandId: 'ubiquiti',
      name: 'Ubiquiti UniFi Smart Power',
      description: 'Redundant power system',
      price: '$299.00',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    }
  ];