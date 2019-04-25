module Todos::Operation
  class Index < Trailblazer::Operation
    step ->(options, params) { options["representer.render.class"] = Todos::Representer::Index }
    step ->(options, params) { options["representer.errors.class"] = Reativo::Representer::Errors }
    step :scope!
    step :model!
    step :cache_key!

    def scope!(ctx, params:, current_user:, **)
      ctx[:scope] = Todo.all
    end

    def model!(ctx, params:, current_user:, **)
      ctx[:model] = ctx[:scope]
    end

    def cache_key!(ctx, params:, current_user:, **)
      ctx[:cache_key] = ctx[:scope].cache_key
    end
  end
end
