import { MockedRequest, ResponseResolver, restContext } from "msw";

export const dynamic: ResponseResolver<
  MockedRequest,
  typeof restContext
> = async (req, res, ctx) => {
  if (window.location.href.includes("#pattern_404"))
    return res(ctx.status(404));
  if (window.location.href.includes("#pattern_500"))
    return res(ctx.status(500));
  if (window.location.href.includes("#pattern_hoge"))
    return res(
      ctx.status(200),
      ctx.json({
        message: "hoge response",
      })
    );

  return res(
    ctx.status(200),
    ctx.json({
      message: "default response",
    })
  );
};
