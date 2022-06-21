import { Status } from 'https://deno.land/std/http/http_status.ts';
import { serve } from 'https://deno.land/std@0.114.0/http/server.ts';
import { delay } from 'https://deno.land/x/delay@v0.2.0/mod.ts';

serve(async (req: Request) => {
  const url = new URL(req.url);
  const searchParams = new URLSearchParams(url.search);

  const msParam = searchParams.get('ms');
  if (!msParam) return new Response(`Response after 0ms`);

  const preparedMsParam = Number(msParam);
  if (!preparedMsParam || preparedMsParam > 10000) return new Response('Timeout is too long (max. 1000ms)', { 
    status: Status.BadRequest
  });
  
  await delay(preparedMsParam);
  return new Response(`Response after ${preparedMsParam}ms`);
})