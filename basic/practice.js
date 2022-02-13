<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title></title>
    </head>
    <body>
    </body>
    <script>
        console.log('asdf')
        class DcError extends Error {
            constructor(msg = 'An error occured', ...params){ super(...params)
                this.msg = msg;
            }
        }
        function siteComponent(func) {
            return func();
        }
        try {
            console.log(siteComponent('oops'));
        }catch(e){
            console.log('an error occured');
            throw new DcError('Some new error', 'some message');
        }
        const widget = () => {
            return '<div>Hi there</div>';
        };
        console.log(siteComponent(widget));
    </script>
</html>

