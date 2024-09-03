import fastify, { FastifyReply, FastifyRequest } from "fastify";
import { z } from 'zod';

const app = fastify();


function isFibonacci(n: number): boolean {
    if (n < 0) return false;

    let a = 0;
    let b = 1;

    while (a <= n) {
        if (a === n) return true;
        [a, b] = [b, a + b];
    }

    return false;
}

function verifyString(a:string){
    return (a.toLowerCase().match(/a/g) || []).length;
}

app.post('/check-fibonacci/:number', async (request:FastifyRequest, reply:FastifyReply) => {

    const fibonacciSchema = z.object({
        number: z.string().transform(val => parseInt(val, 10)).refine(val => !isNaN(val) && val >= 0, {
            message: "Invalid number"
        })
    });

    try {
        
        const {number} = fibonacciSchema.parse(request.params);

        const result = isFibonacci(number);


        reply.send({
            number: number,
            isFibonacci: result
        });
    } catch (error) {
        reply.status(404).send({ error: 'Invalid input' });
    }
});
app.get('/check-fibonacci/:number', async (request:FastifyRequest, reply:FastifyReply) => {

    const fibonacciSchema = z.object({
        number: z.string().transform(val => parseInt(val, 10)).refine(val => !isNaN(val) && val >= 0, {
            message: "Invalid number"
        })
    });

    try {
        
        const {number} = fibonacciSchema.parse(request.params);

        const result = isFibonacci(number);


        reply.send({
            number: number,
            isFibonacci: result
        });
    } catch (error) {
        reply.status(404).send({ error: 'Invalid input' });
    }
});

app.post('/check-string/:a', async (request:FastifyRequest, reply:FastifyReply) => {

    const fibonacciSchema = z.object({
        a: z.string()
    });

    try {
        
        const {a} = fibonacciSchema.parse(request.params);

        const result = verifyString(a);
        const contains= result>0;


        reply.send({
            string: a,
            contains: contains,
            count:result
        });
    } catch (error) {
        reply.status(404).send({ error: 'Invalid input' });
    }
});
app.get('/check-string/:a', async (request:FastifyRequest, reply:FastifyReply) => {

    const fibonacciSchema = z.object({
        a: z.string()
    });

    try {
        
        const {a} = fibonacciSchema.parse(request.params);

        const result = verifyString(a);
        const contains= result>0;


        reply.send({
            string: a,
            contains: contains,
            count:result
        });
    } catch (error) {
        reply.status(404).send({ error: 'Invalid input' });
    }
});

app.listen({
    port: 3030,
}).then(() => {
    console.log('HTTP server is running on http://localhost:3030');
});
