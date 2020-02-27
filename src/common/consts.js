export const isProd = process.env.NODE_ENV === 'production';

export const SCORE_URL = isProd ? 'https://wallet.icon.foundation' : 'https://bicon.net.solidwallet.io';

export const SERVER_URL = isProd ? '' : 'http://localhost:8000';

export const TOKENS = [
  {
    symbol: 'AC3',
    name: 'AC3',
    // address: 'cx9ab3078e72c8d9017194d17b34b1a47b661945ca',
    address: 'cx12f393e1ddc8b5555c86c24d6f396c4c6ca37024',
    lastPrice: 0,
  },
  {
    symbol: 'VELT',
    name: 'Velic Token',
    address: 'cx81fe20ac9a8ed7387b8d17be878c1d0ccb01aabf',
    lastPrice: 0,
  },
  {
    symbol: 'PNP',
    name: 'LogisticsX',
    address: 'cxf9148db4f8ec78823a50cb06c4fed83660af38d0',
    lastPrice: 0,
  },
  {
    symbol: 'SPORT',
    name: 'Sport Token',
    address: 'cx2137642d0bf1926fbe23a3688d042a0f34bc2b9a',
    lastPrice: 0,
  },
  {
    symbol: 'DCX',
    name: 'Somesing Exchange',
    address: 'cx3ec2814520c0096715159b8fc55fa1f385be038c',
    lastPrice: 0,
  },
  {
    symbol: 'IGA',
    name: 'IconGameAlliance',
    address: 'cx429731644462ebcfd22185df38727273f16f9b87',
    lastPrice: 0,
  },
  {
    symbol: 'WOK',
    name: 'weBloc',
    address: 'cxbc264e6279ec971f11ebe3939fc88d05b243eba7',
    lastPrice: 0,
  },
  {
    symbol: 'VCX',
    name: 'VELICX',
    address: 'cxefaa21e34a3a1abf97369b5beef84524f52d88a8',
    lastPrice: 0,
  },
  {
    symbol: 'VELA',
    name: 'Velic Authority',
    address: 'cx19a23e850bf736387cd90d0b6e88ce9af76a8d41',
    lastPrice: 0,
  },
  {
    symbol: 'MCA',
    name: 'MECA Coin',
    address: 'cx921205acb7c51e16d5b7cbc37539a4357d929d20',
    lastPrice: 0,
  },
];
