// webpack.start.ts
import 'ts-node/register';
import webpack from 'webpack';
import config from './.erb/configs/webpack.config.main.dev';

const compiler = webpack(config as any);

if (!compiler) {
    console.error('Erro: compilador Webpack não foi criado.');
    process.exit(1);
}

compiler.run((err, stats) => {
    if (err) {
        console.error('Erro durante a compilação:', err);
        process.exit(1);
    }

    if (stats) {
        console.log(
            stats.toString({
                colors: true,
                modules: false,
                children: false,
                chunks: false,
                chunkModules: false
            })
        );
    }

    compiler.close?.(() => {
        console.log('Compilação Webpack Main finalizada.');
    });
});
